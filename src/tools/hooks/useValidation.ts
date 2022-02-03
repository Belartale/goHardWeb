
// Tools
import { InputsKeys, useInputsRedux } from '../../bus/client/inputs';


export const useValidation = () => {
    const { setInputAction } = useInputsRedux();
    const validationInput = ({ type, value }: { type: InputsKeys, value: string }) => {
        if (value.length > 0) {
            if (type === 'email' && /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)) {
                setInputAction({ type, value: { value, isValidate: true }});

                return;
            } else if (type !== 'email') {
                setInputAction({ type, value: { value, isValidate: true }});

                return;
            }

            setInputAction({ type, value: { value, isValidate: false }});

            return;
        }
        setInputAction({ type, value: { value, isValidate: false }});
    };

    return { validationInput };
};
