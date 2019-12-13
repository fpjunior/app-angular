export interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
        avatar: string;
    }

    export interface ResponseUsers {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: User[];
    }

    //modelos para a criacao
    export interface RequestCreate {
        name: string;
        job: string;
    }

    export interface RResponseCreate {
        name: string;
        job: string;
        id: string;
        createdAt: Date;
    }
