export type McpPlan = 'Free' | 'Pro' | 'Admin';
export type McpWarningLevel = 'none' | 'approaching' | 'exhausted';
export type McpConnectionStatus = 'active' | 'revoked';
export type McpConsentDecision = 'allow' | 'deny';

export interface McpQuotaDto {
	usedPercent: number | null;
	periodStartUtc: string;
	resetAtUtc: string;
}

export interface McpRateLimitDto {
	permitLimit: number;
	windowSeconds: number;
}

export interface McpSetupClientDto {
	id: string;
	label: string;
	format?: 'json' | 'toml';
	fileName?: string;
	configuration: string | Record<string, unknown>;
}

export interface McpStatusDto {
	enabled: boolean;
	mcpUrl: string;
	plan: McpPlan;
	quota: McpQuotaDto;
	rateLimit: McpRateLimitDto;
	warningLevel: McpWarningLevel;
	setupClients: McpSetupClientDto[];
}

export interface McpConnectionDto {
	id: string;
	clientId: string;
	clientName: string;
	createdAtUtc: string;
	lastUsedAtUtc: string | null;
	status: McpConnectionStatus;
}

export interface McpConnectionsResponse {
	connections: McpConnectionDto[];
}

export interface McpAuthorizationRequestDto {
	clientName: string;
	requestedScopes: string[];
	accountEmail: string;
	expiresAtUtc: string;
}

export interface McpAuthorizationDecisionRequest {
	decision: McpConsentDecision;
}

export interface McpAuthorizationDecisionResponse {
	continuationUrl: string;
}
