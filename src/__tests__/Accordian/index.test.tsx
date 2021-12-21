import * as React from 'react';
import { shallow, mount, configure } from 'enzyme';
import { Accordian, AccordianInterface } from '../../Accordian';


const props: Omit<AccordianInterface, 'children'> = {
    list: ['one', 'two'],
    onclick: (item: string) => {console.log(item)},
    hasArrow: true,
    arrowAlignment: 'left',
};
describe('Accordian should', ()=>{
    test('render Accordian', () => {
        const wrapper = shallow(<Accordian {...props}><p>this is paragraph</p></Accordian>);
        expect(wrapper.find('.rt-accordian-item')).toHaveLength(props.list.length)
    }); 
    // test('render disabled checkboxes', () => {
    //     const nProps = {...props, disabled: true}
    //     const wrapper = shallow(<CheckboxGroup {...nProps} />);
    //     expect(wrapper.find('.rt-checkbox-group--disabled')).toHaveLength(1)
    // });

    // test('call onCheckboxSelect with checked checkboxes', () => {
    //     const nProps = {...props}
    //     const wrapper = mount(<CheckboxGroup {...nProps} />);
    //     wrapper.find('Checkbox').at(0).find('.rt-checkbox-item').simulate('click');
    //     expect(props.onCheckboxSelect).toHaveBeenCalledWith(['On']);
    // });

    // test('render checkboxes with stacked alignment', () => {
    //     type Alignment = "inline" | "stacked";
    //     const alignment: Alignment | undefined = "stacked";
    //     const nProps = {...props, alignment};
    //     const wrapper = shallow(<CheckboxGroup {...nProps} />);
    //     expect(wrapper.find('.rt-checkbox-group--stacked')).toHaveLength(1)
    // });
    // test('render checked Checkbox with click event simulation', () => {
    //     const prop ={item: 'On', onItemCheck: jest.fn()};
    //     const wrapper = shallow(<Checkbox {...prop} />);
    //     wrapper.find('.rt-checkbox-item').simulate('click');
    //     expect(prop.onItemCheck).toHaveBeenCalledWith({
    //         item: 'On',
    //         isChecked: true,
    //     });
    // })
    // test('render disabled Checkbox', () => {
    //     const prop ={item: 'On', onItemCheck: jest.fn(),  disabled: true};
    //     const wrapper = shallow(<Checkbox {...prop} />);
    //     expect(wrapper.find('.rt-checkbox-group--disabled')).toHaveLength(1)
    // })
})
