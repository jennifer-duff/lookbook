export function reorderArray(array, oldIndex, newIndex) {
    if (newIndex >= array.length) {
        var k = newIndex - array.length + 1;
        while (k--) {
            array.push(undefined);
        }
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array; // for testing
}
