const env = require("./env");

/**
 * Configuración de conexión a Base de Datos mediante variables de entorno (.env)
 * Soporta tanto cadena de conexión PostgreSQL (DATABASE_URL) como cliente Supabase (SUPABASE_URL + SUPABASE_KEY).
 */
const dbConfig = {
  databaseUrl: env.databaseUrl,
  supabaseUrl: env.supabaseUrl,
  supabaseKey: env.supabaseKey,
  isConfigured: Boolean(env.databaseUrl || (env.supabaseUrl && env.supabaseKey)),
};

module.exports = dbConfig;

