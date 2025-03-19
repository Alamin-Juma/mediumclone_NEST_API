const { execSync } = require('child_process');
const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Please provide a migration name');
  process.exit(1);
}

try {
  execSync(`npm run typeorm -- migration:generate -d ormconfig.ts src/migrations/${migrationName}`, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}