function Find(target, array)
{
    // write code here
    return array.some(arr=>arr.some(e=>e===target))
}