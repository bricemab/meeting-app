export enum UserRole {
    USER_ANONYMOUS = "USER_ANONYMOUS",
    USER_NORMAL = "USER_NORMAL",
    USER_GOLDEN = "USER_GOLDEN",
    USER_PLATINUM = "USER_PLATINUM",
}

export enum Sex {
    MAN = "MAN",
    WOMAN = "WOMAN",
    NO_BINARY = "NO_BINARY"
}

export enum SexualOrientation {
    HETERO = "HETERO",
    BISEXUAL = "BISEXUAL",
    LESBIAN = "LESBIAN"
}

export enum Mood {
    FRIEND = "FRIEND",
    SEX_FRIEND = "SEX_FRIEND",
    TRUE_LOVE = "TRUE_LOVE"
}

export interface User {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    role: UserRole;
    birthday: string;
    lastConnectionDate: Date;
    bio: string;
    location: string;
    sex: Sex;
    orientation: SexualOrientation;
    roleExpirationDate: Date;
    mood: Mood;
    job: string;
    JobLocation: string;
    school: string;
}