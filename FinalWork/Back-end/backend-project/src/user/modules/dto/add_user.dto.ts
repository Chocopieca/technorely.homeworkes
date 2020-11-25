export interface CreateUserDto {
    id: number;
    email: string;
    password: string;
    phoneNumber: string;
    firstName: string;
    lastName: string;
    nickname: string;
    description: string;
    position: string;
    role: string;
  }