import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { RadioGroup, RadioGroupInterface } from "../../Radio";

export default {
    title: 'Radio',
    component: RadioGroup,
    argTypes: {
        alignment: {
            options: ['inline', 'stacked'],
            control: { type: 'radio' }
        },
    },
};

const fn = (item: string) => console.log(item);

const props: RadioGroupInterface = {
    items: ['this', 'that'],
    onRadioSelect: fn
    // defaultValue?: string
    // alignment?: Alignment
    // disabled?: boolean
};
describe('Radio', ()=>{
    test('should render with default setting', () => {
        const wrapper = shallow(<RadioGroup {...props} />);
        // console.log(wrapper.debug()) // console.log()
        expect(wrapper.find('.radio-item')).toHaveLength(2);
    });
})
