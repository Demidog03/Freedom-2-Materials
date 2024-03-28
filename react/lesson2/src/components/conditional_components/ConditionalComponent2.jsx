const ConditionalComponent2 = () => {
    // conditional rendering - рендеринг по условию
    const isLoggedIn = true

    return (
        <h1 style={{ color: isLoggedIn ? 'blue' : 'red' }}>
            {isLoggedIn ? 'Добро пожаловать в систему!' : 'Вы не авторизованы!'}
        </h1>
    )
}

export default ConditionalComponent2;
