import {atom} from 'recoil';

export const nameState = atom({
    key: 'admin_name',
    default: '',
});

export const portState = atom({
    key: 'admin_port',
    default: '',
});

export const robotState = atom({
    key: 'robotinfo',
    default: {
        id: 0,
        status: "대기 중",
    }
});