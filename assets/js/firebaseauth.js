// Verifica que el archivo firebaseauth.js se está ejecutando
console.log('El archivo firebaseauth.js se está ejecutando');

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDCVl7YzXjLpXPc_DRdA2Pv4HZ2eeeN2ks",
    authDomain: "landing-page-entel.firebaseapp.com",
    projectId: "landing-page-entel",
    storageBucket: "landing-page-entel.appspot.com",
    messagingSenderId: "526510505807",
    appId: "1:526510505807:web:b8d3406479898802900f3a"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
console.log('Firebase inicializado', auth); // Verifica que Firebase se inicializó correctamente

// Función de login
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Formulario enviado, email:', email);

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('Inicio de sesión exitoso');
                alert('Inicio de sesión exitoso'); // Alerta de inicio de sesión exitoso
                window.location.href = '/home.html';
            })
            .catch((error) => {
                console.error('Error durante el inicio de sesión:', error.message);
                alert('Datos de inicio de sesión incorrectos'); // Alerta de datos incorrectos
            });
    });
}

// Verifica si el usuario está logeado
auth.onAuthStateChanged((user) => {
    const currentPath = window.location.pathname;
    console.log('Cambio en el estado de autenticación, usuario:', user); // Verifica el cambio en el estado de autenticación
    if (user && currentPath.includes('/index.html')) {
        window.location.href = '/home.html'; // Redirige a la página de inicio si el usuario está autenticado
    } else if (!user && currentPath.includes('/home.html')) {
        window.location.href = '/index.html'; // Redirige a la página de login si el usuario no está autenticado
    }
});

// Función de logout
const logoutButton = document.getElementById('logout-button');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        auth.signOut().then(() => {
            console.log('Cierre de sesión exitoso');
            window.location.href = '/index.html'; // Redirige a la página de login después de cerrar sesión
        }).catch((error) => {
            console.error('Error durante el cierre de sesión:', error.message);
        });
    });
}
