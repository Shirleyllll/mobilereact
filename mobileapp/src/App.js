
import { Button, Toast } from 'antd-mobile'
const App = () => {
    const test = () => {
        Toast.success('Load success !!!', 1)
    }
    return (
        <div>
            <Button type='primary' onClick={test}>Primary</Button>
        </div>
    );
}

export default App;
