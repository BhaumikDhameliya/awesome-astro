import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://nztebjeeiunsfaeyzpfp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56dGViamVlaXVuc2ZhZXl6cGZwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2MDYzMzA0OSwiZXhwIjoxOTc2MjA5MDQ5fQ.cEKpgH9FZA3idIIT1wCKYs2PWm7wdzBB600AAPamWZE"
);
