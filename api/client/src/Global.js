import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
	--primary-color: grey;
	--secondary-color: #F5F5F5;
	--primary-text: #475F45;
	--secondary-text: #fff;
	}

	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
        box-sizing: border-box;
	}

	html{
        font-family: "Roboto Condensed", sans-serif;
		font-size: 62.5%;
        line-height: 1;
        color: #35323e;
	}
	
	a {
		text-decoration: none;
	}
`;
