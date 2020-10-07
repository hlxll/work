import {ref} from 'vue';
function add(){
    let count = ref(0);
    function addCount(){
        count.value = count.value + 1;
    }
    return {count, addCount}
}

export default add;