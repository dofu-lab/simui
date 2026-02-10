export interface GoogleSignInRequest {
  code: string;
}

export interface AuthResponse {
  token: string;
  user: UserDto;
}

export interface UserDto {
  id: string;
  email: string;
  name: string | null;
  pictureUrl: string | null;
  role: string;
}

export interface AuthState {
  user: UserDto | null;
  token: string | null;
  isAuthenticated: boolean;
}

// Google Types
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: GoogleIdConfiguration) => void;
          renderButton: (parent: HTMLElement, options: GoogleButtonConfiguration) => void;
          prompt: () => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}

export interface GoogleIdConfiguration {
  client_id: string;
  callback: (response: GoogleCallbackResponse) => void;
  auto_select?: boolean;
  cancel_on_tap_outside?: boolean;
}

export interface GoogleCallbackResponse {
  credential: string;
  select_by: string;
}

export interface GoogleButtonConfiguration {
  theme?: 'outline' | 'filled_blue' | 'filled_black';
  size?: 'large' | 'medium' | 'small';
  type?: 'standard' | 'icon';
  shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
  logo_alignment?: 'left' | 'center';
  width?: number;
}
