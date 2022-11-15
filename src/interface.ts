export interface User {
	login: string
	name: string
	avatar_url :string;
	public_repos: number
	public_gists: number
	followers: number
	following: number
	created_at: string
	updated_at: string
}

export type Event = {
	id: string
	type: string
	actor: {
		id: number
		login: string
		display_login: string
		gravatar_id: string
		url: string
		avatar_url: string
	}
	repo: {
		id: number
		name: string
		url: string
	}
	payload: {
		size?: number
		commits?: [{
			sha: string
			message: string
		}]
	}
	
	created_at: string
}
