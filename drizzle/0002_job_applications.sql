CREATE TABLE IF NOT EXISTS job_applications (
  id TEXT PRIMARY KEY NOT NULL,
  job_slug TEXT NOT NULL,
  job_title TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  portfolio_url TEXT,
  message TEXT,
  cv_data TEXT,
  cv_name TEXT,
  cv_size INTEGER,
  consent_checked INTEGER NOT NULL DEFAULT 0,
  is_read INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS job_applications_job_slug_idx ON job_applications (job_slug);

CREATE INDEX IF NOT EXISTS job_applications_created_at_idx ON job_applications (created_at);
