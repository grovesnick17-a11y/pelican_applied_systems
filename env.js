// Public runtime config for the static site.
// The Supabase anon key is designed to be public; database access is
// restricted by row-level security (insert-only on `waitlist`).
window.__ENV = {
  SUPABASE_URL: 'https://cgeaabujmbabjxuxqscz.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNnZWFhYnVqbWJhYmp4dXhxc2N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM3MTk0OTEsImV4cCI6MjA5OTI5NTQ5MX0.EFqiuWM5Iv8b3_5BxT4JUj3FReW-ZtYndDLXor98odc',
};
