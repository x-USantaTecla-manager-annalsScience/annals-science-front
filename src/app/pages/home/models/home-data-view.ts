
export const DATA_ENTITY = [{
    name: 'Entidad1',
    surname: 'Prueba de entidad',
    birth: '01/05/2005',
    description: 'Esto es una prueba de una entidad'
}, {
    name: 'Entidad2',
    surname: 'Prueba de entidad_2',
    birth: '14/05/2001',
    description: 'Esto es una prueba de una entidad'
}, {
    name: 'Entidad3',
    surname: 'Prueba de entidad_3',
    birth: '20/07/1990',
    description: 'Esto es una prueba de una entidad'
}
];

export const HEADER_LOGIN: any[] = [
    { field: 'email', value: 'Email: ', isInput: true , type: 'text'},
    { field: 'password', value: 'Contraseña: ', isInput: true, type : 'password' }
];

export const HEADER_REGISTER: any[] = [
    { field: 'name', value: 'Nombre', isInput: true , type: 'text' },
    { field: 'surname', value: 'Apellido', isInput: true , type:'text'},
    { field: 'email', value: 'Email: ', isInput: true ,type:'text' },
    { field: 'password', value: 'Contraseña: ', isInput: true, type:'password' },
    { field: 'passwordRepeat', value: 'Repita contraseña', isInput: true, type:'password' }
];