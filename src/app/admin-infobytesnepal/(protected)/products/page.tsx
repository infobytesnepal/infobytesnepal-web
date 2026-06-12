import ConfirmButton from "@/components/admin/confirm-button";
import { AdminCard, AdminFileInput, AdminInput, AdminTextarea, SaveButton } from "@/components/admin/ui";
import CmsImage from "@/components/public/cms-image";
import { deleteProduct, upsertProduct } from "@/lib/actions/admin";
import { getProducts } from "@/lib/data";

export default async function ProductsAdminPage() {
  const products = await getProducts(true);
  return (
    <div>
      <h1 className="text-3xl font-semibold text-deep-navy">Products</h1>
      <AdminCard className="mt-6">
        <h2 className="text-xl font-semibold text-deep-navy">Create product</h2>
        <ProductForm />
      </AdminCard>
      <div className="mt-6 grid gap-5">
        {products.map((product) => (
          <AdminCard key={product.id}>
            <div className="mb-5 flex items-center gap-4">
              <CmsImage src={product.logoUrl} alt={`${product.name} logo`} width={52} height={52} className="h-12 w-12" />
              <div>
                <h2 className="text-xl font-semibold text-deep-navy">{product.name}</h2>
                <p className="text-sm text-dark-text/60">/{product.slug} · order {product.displayOrder} · {product.isPublished ? "Published" : "Unpublished"}</p>
              </div>
            </div>
            <ProductForm product={product} />
            <form action={deleteProduct} className="mt-3">
              <input type="hidden" name="id" value={product.id} />
              <ConfirmButton message={`Delete ${product.name}?`} className="rounded-full border border-primary-blue/20 px-4 py-2 text-sm font-semibold text-deep-navy">
                Delete product
              </ConfirmButton>
            </form>
          </AdminCard>
        ))}
      </div>
    </div>
  );
}

function ProductForm({ product }: { product?: Awaited<ReturnType<typeof getProducts>>[number] }) {
  return (
    <form action={upsertProduct} className="mt-5 grid gap-4">
      <input type="hidden" name="id" value={product?.id || ""} />
      <div className="grid gap-4 md:grid-cols-3">
        <AdminInput label="Product name" name="name" defaultValue={product?.name || ""} required />
        <AdminInput label="Slug" name="slug" defaultValue={product?.slug || ""} required />
        <AdminInput label="Display order" name="displayOrder" type="number" defaultValue={product?.displayOrder || 0} />
      </div>
      <input type="hidden" name="logoUrl" value={product?.logoUrl || ""} />
      <AdminFileInput label={product ? "Replace product logo" : "Product logo"} name="logoFile" accept="image/*" help="Upload an image or SVG from your device." required={!product} />
      <AdminTextarea label="Short description" name="shortDescription" rows={3} defaultValue={product?.shortDescription || ""} required />
      <AdminTextarea label="Full description" name="fullDescription" rows={5} defaultValue={product?.fullDescription || ""} required />
      <div className="grid gap-4 md:grid-cols-3">
        <AdminInput label="SEO title" name="seoTitle" defaultValue={product?.seoTitle || ""} />
        <AdminInput label="SEO description" name="seoDescription" defaultValue={product?.seoDescription || ""} />
        <div>
          <input type="hidden" name="ogImage" value={product?.ogImage || ""} />
          <AdminFileInput label="OG image" name="ogImageFile" accept="image/*" help="Optional social sharing image." />
        </div>
      </div>
      <label className="flex items-center gap-3 text-sm font-medium text-deep-navy">
        <input name="isPublished" type="checkbox" defaultChecked={product?.isPublished ?? true} className="h-4 w-4 accent-primary-blue" />
        Published
      </label>
      <SaveButton>{product ? "Save product" : "Create product"}</SaveButton>
    </form>
  );
}
