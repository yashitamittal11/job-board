export const addUserToLocalStorage = ( user ) => {
    localStorage.setItem( 'user', JSON.stringify( user) );
}

export const removeUserFromLocalStorage = ( ) => {
    localStorage.removeItem( 'user' );
}

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem( 'user' );
    const user = result ? JSON.parse( result ) : null;
    console.log(`User from local storage is ${JSON.stringify(user)}`);
    return user;
}