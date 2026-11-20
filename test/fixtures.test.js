import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('本地演练资料保留来源、修订及不同粒度的设施事实', async () => {
  const data = JSON.parse(await readFile(new URL('../fixtures/observations.json', import.meta.url), 'utf8'));
  assert.equal(data.fixture_kind, 'synthetic');
  assert.ok(data.records.some((record) => record.type === 'roaming'));
  assert.ok(data.records.some((record) => record.type === 'maintenance'));
  assert.ok(data.records.filter((record) => record.id === 'S-17').length > 1);
});
