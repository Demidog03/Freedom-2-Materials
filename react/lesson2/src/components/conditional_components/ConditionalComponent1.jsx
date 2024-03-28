const ConditionalComponent1 = () => {
    // conditional rendering - рендеринг по условию
    const isLoggedIn = true

    if (!isLoggedIn) {
        return <h1 style={{ color: 'red' }}>Вы не авторизованы!</h1>
    }

    return <h1 style={{ color: 'blue' }}>Добро пожаловать в систему!</h1>
}

export default ConditionalComponent1;
