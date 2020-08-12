import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// configuration for writing smoke test

configure({ adapter: new Adapter() });
