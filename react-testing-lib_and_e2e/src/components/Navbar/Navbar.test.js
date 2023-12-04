import {screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import React from "react";
import Navbar from "./Navbar";
// import {renderWithRouter} from "tests/helpers/renderWithRouter";
import {renderTestApp} from "tests/helpers/renderTestApp";


describe('USERS TEST', () => {
    test('test user link', async() => {
	    renderTestApp(<Navbar />);
      const usersLink = screen.getByTestId('users-link');
      userEvent.click(usersLink);
      expect(screen.getByTestId('users-page')).toBeInTheDocument();
    });
    test('test about link', async() => {
	    renderTestApp(<Navbar />);
      const aboutLink = screen.getByTestId('about-link');
      userEvent.click(aboutLink);
      expect(screen.getByTestId('about-page')).toBeInTheDocument();
    });
    test('test main link', async() => {
	    renderTestApp(<Navbar />, '/users');
      const mainLink = screen.getByTestId('main-link');
      userEvent.click(mainLink);
      expect(screen.getByTestId('main-page')).toBeInTheDocument();
    });
		test('test e2e-example link', async() => {
			renderTestApp(<Navbar />);
			const e2eExampleLink = screen.getByTestId('e2e-example-link');
			userEvent.click(e2eExampleLink);
			expect(screen.getByTestId('e2e-example-page')).toBeInTheDocument();
		});
})

