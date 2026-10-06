import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import {
	McpAuthorizationDecisionResponse,
	McpAuthorizationRequestDto,
	McpConnectionsResponse,
	McpConsentDecision,
	McpStatusDto,
} from '@core/models/mcp.models';
import { Observable } from 'rxjs';

@Service()
export class McpHttpService {
	private readonly http = inject(HttpClient);
	private readonly apiUrl = `${environment.apiUrl}/v1/mcp`;

	getStatus(): Observable<McpStatusDto> {
		return this.http.get<McpStatusDto>(`${this.apiUrl}/status`);
	}

	getConnections(): Observable<McpConnectionsResponse> {
		return this.http.get<McpConnectionsResponse>(`${this.apiUrl}/connections`);
	}

	revokeConnection(connectionId: string): Observable<void> {
		return this.http.delete<void>(`${this.apiUrl}/connections/${encodeURIComponent(connectionId)}`);
	}

	getAuthorizationRequest(requestId: string): Observable<McpAuthorizationRequestDto> {
		return this.http.get<McpAuthorizationRequestDto>(
			`${this.apiUrl}/authorization-requests/${encodeURIComponent(requestId)}`,
		);
	}

	decideAuthorizationRequest(
		requestId: string,
		decision: McpConsentDecision,
	): Observable<McpAuthorizationDecisionResponse> {
		return this.http.post<McpAuthorizationDecisionResponse>(
			`${this.apiUrl}/authorization-requests/${encodeURIComponent(requestId)}/decision`,
			{ decision },
		);
	}
}
