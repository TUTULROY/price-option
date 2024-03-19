import PropTypes from 'prop-types';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><IoIosCheckmarkCircleOutline className='text-green-300 mr-2'></IoIosCheckmarkCircleOutline> {feature}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;