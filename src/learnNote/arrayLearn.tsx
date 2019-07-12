import * as React from 'react';
class arrayLearn extends React.Component {
    getAge() {
        const ages = [10, 21,33, 20,15, 14, 90, 12];
        const maxAge = ages.reduce((max, age) => {
            console.log(`${age} > ${max} = ${age > max}`);
            if (age > max) {
                return age;
            } else {
                return max;
            }
        }, 0);
        console.log('maxage', maxAge);
    }
}