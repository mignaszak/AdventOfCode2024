def getCountOfElements(elements, value):
    count = 0
    for element in elements:
        if element == value:
            count += 1
    return count

# Open the file in read mode
firstColumn = []
secondColumn = []
with open('input1.txt', 'r') as file:
    # Read each line in the file
    for line in file:
        # Print each line
        elements = line.split()
        firstColumn.append(int(elements[0]))
        secondColumn.append(int(elements[1]))
    firstColumn.sort()
    secondColumn.sort()
    index = 0
    diffSum = 0
    similarityScore = 0
    print(getCountOfElements(secondColumn,firstColumn[0]))
    for element in firstColumn:
        diffSum += abs(element - secondColumn[index])
        similarityScore += element * getCountOfElements(secondColumn,element)
        index += 1
    print("part 1: " + str(diffSum)) 
    print("part 2: " + str(similarityScore))        