/*https://codefights.com/challenge/Wph6jWaomwnsBW6Sc

In computer science, rate-monotonic scheduling (RMS) is a priority assignment algorithm used in real-time operating systems. Given a set of tasks, your job is to determine whether they are schedulable by checking the Liu-Layland system utilization condition.

Liu & Layland proved that for a set of periodic tasks with unique periods, there exists a feasible schedule that will always meet deadlines if the CPU utilization is below a specific bound which depends on the number of tasks. The schedulability test they came up with is as follows:

where Ci and Ti are the computation time and period of the ith task, respectively.

For the given tasks, return true if they satisfy the Liu-Layland condition and false otherwise.

Example

For tasks = [[1, 2], [3, 4]], the output should be
schedulable(tasks) = false.

1 / 2 + 3 / 4 = 1.25 > 0.8284..., meaning the answer is false.*/

function schedulable(tasks) {
    var sum1=0,n=tasks.length;
    for(var i=0;i<n;i++)
        sum1+=tasks[i][0]/tasks[i][1];
    return sum1<=n*(Math.pow(2,1/n)-1);
}