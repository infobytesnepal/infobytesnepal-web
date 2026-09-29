import ConfirmButton from "@/components/admin/confirm-button";
import CmsForm from "@/components/admin/cms-form";
import ImageField from "@/components/admin/image-field";
import { AdminCard, AdminInput, AdminTextarea } from "@/components/admin/ui";
import CmsImage from "@/components/public/cms-image";
import { deleteProduct, upsertProduct } from "@/lib/actions/admin";
import { getProducts } from "@/lib/data";
import { requireAdmin } from "@/lib/auth";

type Product = Awaited<ReturnType<typeof getProducts>>[number];

export default async function ProductsAdminPage() {
  await requireAdmin();
  const products = await getProducts(true);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Products</h1>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-dark-text/65">
        Each product gets a page at /products/&lt;slug&gt; and appears on /products, the footer, the sitemap, and
        llms.txt as soon as it is saved as published.
      </p>

      <AdminCard className="mt-6">
        <h2 className="text-xl font-semibold text-deep-navy">Create product</h2>
        <ProductForm nextOrder={Math.max(0, ...products.map((product) => product.displayOrder ?? 0)) + 1} />
      </AdminCard>

      <h2 className="mt-10 text-xl font-semibold text-deep-navy">Existing products ({products.length})</h2>
      <div className="mt-4 grid gap-4">
        {products.map((product) => (
          <AdminCard key={product.id}>
            {/*
              Collapsed by default. Six full edit forms open at once, each with
              two image fields and a long description, made the page several
              thousand pixels tall and the one being edited hard to find.
            */}
            <details>
              <summary className="flex cursor-pointer list-none items-center gap-4">
                <CmsImage src={product.logoUrl} alt={`${product.name} logo`} width={52} height={52} className="h-12 w-12 object-contain" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold text-deep-navy">{product.name}</h3>
                  <p className="text-sm text-dark-text/60">
                    /products/{product.slug} · order {product.displayOrder} · {product.isPublished ? "Published" : "Unpublished"}
                  </p>
                </div>
                <span className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy">Edit</span>
              </summary>
              <ProductForm product={product} />
              <form action={deleteProduct} className="mt-4 border-t border-primary-blue/10 pt-4">
                <input type="hidden" name="id" value={product.id} />
                <ConfirmButton
                  message={`Delete ${product.name}? Its page at /products/${product.slug} will stop working.`}
                  className="rounded-full border border-red-200 px-4 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
                >
                  Delete product
                </ConfirmButton>
              </form>
            </details>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}

function ProductForm({ product, nextOrder }: { product?: Product; nextOrder?: number }) {
  return (
    <CmsForm
      action={upsertProduct}
      className="mt-5 grid gap-4"
      submitLabel={product ? "Save product" : "Create product"}
      resetOnSuccess={!product}
    >
      <input type="hidden" name="id" value={product?.id || ""} />
      <div className="grid gap-4 md:grid-cols-3">
        <AdminInput label="Product name" name="name" defaultValue={product?.name || ""} required maxLength={120} />
        <label className="grid gap-2 text-sm font-medium text-deep-navy">
          Slug
          <input
            name="slug"
            defaultValue={product?.slug || ""}
            maxLength={120}
            placeholder="made from the name if left blank"
            className="rounded-2xl border border-primary-blue/15 px-4 py-3 text-dark-text focus:outline-primary-blue"
          />
          <span className="text-xs font-normal leading-5 text-dark-text/58">
            The page address. Lowercased for you, so &ldquo;ClinicNP&rdquo; becomes /products/clinicnp.
            {product && " Changing it breaks existing links to this product."}
          </span>
        </label>
        <AdminInput label="Display order" name="displayOrder" type="number" defaultValue={product?.displayOrder ?? nextOrder ?? 0} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ImageField
          label={product ? "Product logo" : "Product logo (required)"}
          fileName="logoFile"
          urlName="logoUrl"
          currentUrl={product?.logoUrl}
          required
          aspect="square"
          help="PNG, SVG, or WebP with a transparent background works best."
        />
        <ImageField
          label="Social share image (optional)"
          fileName="ogImageFile"
          urlName="ogImage"
          currentUrl={product?.ogImage}
          allowRemove
          help="Shown when the product page is shared on Facebook or LinkedIn. 1200×630 is ideal."
        />
      </div>

      <AdminTextarea
        label="Short description"
        name="shortDescription"
        rows={3}
        maxLength={700}
        defaultValue={product?.shortDescription || ""}
        required
      />
      <AdminTextarea
        label="Full description"
        name="fullDescription"
        rows={product ? 10 : 6}
        maxLength={20000}
        defaultValue={product?.fullDescription || ""}
        required
      />
      <p className="-mt-2 text-xs leading-5 text-dark-text/58">
        One paragraph per line. Each line becomes its own paragraph on the product page.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <AdminInput label="SEO title" name="seoTitle" maxLength={180} defaultValue={product?.seoTitle || ""} />
        <AdminInput label="SEO description" name="seoDescription" maxLength={320} defaultValue={product?.seoDescription || ""} />
      </div>
      <label className="flex items-center gap-3 text-sm font-medium text-deep-navy">
        <input name="isPublished" type="checkbox" defaultChecked={product?.isPublished ?? true} className="h-4 w-4 accent-primary-blue" />
        Published
      </label>
    </CmsForm>
  );
}
