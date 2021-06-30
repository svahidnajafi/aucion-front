export class UserModel {
    id?: number;
    name: string;
    lastName: string;
    nationalCode: string;
    password: string;
}

export class LoginAndSignupResponse {
    result: boolean;
    message: string;
}
