import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {MemoryRouter} from "react-router-dom";
import {renderTestApp} from "./tests/helpers/renderTestApp";
import {Provider} from "react-redux";
import {createReduxStore} from "./store/store";

describe('TEST APP', () => {
    test('Router test', () => {
        render(
	        <Provider store={createReduxStore()}>
						<MemoryRouter>
							<App/>
						</MemoryRouter>
					</Provider>
        );
        const mainLink = screen.getByTestId('main-link');
        const aboutLink = screen.getByTestId('about-link');
        userEvent.click(aboutLink);
        expect(screen.getByTestId('about-page')).toBeInTheDocument();
        userEvent.click(mainLink);
        expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });

    test('Error page test', () => {
        render(
            <MemoryRouter initialEntries={['/asd']}>
                <App/>
            </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
})

