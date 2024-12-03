import re

def task1(input):    
    regex = "mul[(][0-9]{1,3},[0-9]{1,3}[)]"
    x = re.findall(regex, txt)
    result = 0
    for value in x:
        values = value.replace("mul(","").replace(")","").split(",")
        result += int(values[0])*int(values[1])
    return result

def task2(input):    
    regex = "don't[(][)]|mul[(][0-9]{1,3},[0-9]{1,3}[)]|do[(][)]"
    x = re.findall(regex, txt)
    enabled = True
    result = 0
    for value in x:
        if value == "don't()":
            enabled = False
        elif value == "do()":
            enabled = True
        elif enabled:
            values = value.replace("mul(","").replace(")","").split(",")
            result += int(values[0])*int(values[1])
    return result

with open('input3.txt', 'r') as file:
    txt = file.read()
    result1 = task1(txt)
    print("task1 result: " + str(result1))
    result2 = task2(txt)
    print("task2 result: " + str(result2))