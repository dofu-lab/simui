import { isSafeMcpReturnTarget } from './auth.service';

describe('MCP authentication return target', () => {
	const origin = 'https://simui.dev';

	it('accepts only the local consent route with one UUID request ID', () => {
		expect(isSafeMcpReturnTarget('/mcp/authorize?requestId=123e4567-e89b-42d3-a456-426614174000', origin)).toBe(true);
	});

	const unsafeTargets = [
		'https://evil.example/mcp/authorize?requestId=123e4567-e89b-42d3-a456-426614174000',
		'/profile',
		'/mcp/authorize?requestId=not-a-uuid',
		'/mcp/authorize?requestId=123e4567-e89b-42d3-a456-426614174000&next=https://evil.example',
		'/mcp/authorize?requestId=123e4567-e89b-42d3-a456-426614174000#fragment',
	];

	for (const target of unsafeTargets) {
		it(`rejects unsafe target ${target}`, () => {
			expect(isSafeMcpReturnTarget(target, origin)).toBe(false);
		});
	}
});
