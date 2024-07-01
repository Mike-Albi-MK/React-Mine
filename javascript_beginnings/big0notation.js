//Introduction to Big 0 notation
/*
    So there are many ways of solving a problem by programming
    Like many algorithms for sorting a list of numbers
    In high performance systems, it's very important to choose the right one
    
    The Big 0 notation is a way of estimating the performance of an alogrithm
    It's a way of classifying and simplifying algorithms so we can compare
    The Big 0 notation can be used for different aspects of an algorithm
    
    These are calles "complexities"
    Usually you look at "time complexity" or "space compexity"
            "Time complexity" is basically CPU
            "Space complexity is basically RAM
            
    For simplicity and for the sake of time, we will focus on "time complexity"
    
    The Big 0 notation actually defines growth
    As the amoutn of input grows, how does the algorithm react
    
    ***Constant
    
    Let's imagine a number sorting algorithm calles "Search"
        Search takes 1000 seconds to sort 10 numbers
        Search takes 1000 seconds to sort 40 numbers
        Search takes 1000 seconds to sort 100 numbers
        Search takes 1000 seconds to sort 900 numbers
        
    This is calles constant time complexity – Search takes the amount of time, even when inputs increase

    In Big 0 notation, this is represented  a`0[n]
        You read that as "o of n"
    
        Sorting 10 numbers in 4 seconds isn't great
        But 1000 numbers in 10seconds sounds much better
        The algorithm isn't good for small inputs
        But sounds pretty good for big inputs
        
        */