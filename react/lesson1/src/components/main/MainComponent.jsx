import Counter from './Counter'
import classes from './Main.module.css'

function MainComponent(props) {
    return (
        <main>
            <div className={classes.header}>
                {props.titleName}
                <Counter />
            </div>
        </main>
    )
}

export default MainComponent