export const useValidation = () => {
    // type firstNameFeedback || lastNameFeedback || ...
    const validationInput = ({ type, value }: { type: 'text' | 'email', value: string | null }) => {
        if (typeof value === 'string') {
            if (type === 'email') {
                if (
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
                ) {
                    return false;
                }

                return true;
            }


            if (type === 'text') {
                if (value.length > 0) {
                    return false;
                }

                return true;
            }
        }

        return false;
    };

    return { validationInput };
};
