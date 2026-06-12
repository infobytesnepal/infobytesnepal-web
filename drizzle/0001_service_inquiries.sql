CREATE TABLE IF NOT EXISTS service_inquiries (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  organization_name TEXT,
  contact_number TEXT NOT NULL,
  email TEXT,
  service_type TEXT NOT NULL,
  remarks TEXT,
  is_read INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
