import { FC } from 'react';
import { Provider } from 'react-redux';
import AppRouter from '@app/routes/AppRouter';
import { store } from '@app/store/store';

const App: FC = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default App;
