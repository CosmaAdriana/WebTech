const orderCoffe = (type) => {
    const types = {
        SPECIIAL : 'SPECIAL',
        REGULAR : 'REGULAR'
    }

    if(Object.values(types).indexOf(type) === -1){
        throw new Error('coffe error');
    }else{
        console.log(`preapering a ${type} coffee`);
    }
}

try{
    orderCoffe('REGULAR');
    orderCoffe('SWEET_COFFFEE_NO_SUGAR_NO_CAFFEINE');
}catch(err){
    console.warn(err.message);
}
