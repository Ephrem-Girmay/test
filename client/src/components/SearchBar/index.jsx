import { Input, SearchContainer, Icon } from './styled';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <SearchContainer>
            <Input placeholder="Search for a product" />
            <Icon>
                <FaSearch />
            </Icon>
        </SearchContainer>
    );
};

export default SearchBar;
