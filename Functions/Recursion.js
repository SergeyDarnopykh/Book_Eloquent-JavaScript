function isEven(n) {
    if (n == 0) {
        return true;
    }

    if (n == 1) {
        return false;
    }

    return (n > 0) ? isEven(n - 2) : isEven(n + 2);
}