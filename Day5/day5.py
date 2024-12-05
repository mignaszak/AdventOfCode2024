import math

rules = []
correctPages = []
incorrectPages = []
correctedPages = []

def calculateResult(pages):
    sum = 0
    for val in pages:
        middleIndex = math.floor((len(val)-1)/2)
        sum+=int(val[middleIndex])
    return sum

def getWrongPairsInPages(pages):
    wrongPairs = []
    for idx, x in enumerate(pages):
        for idy in range(idx+1,len(pages)):
            if(rules.count((pages[idy],x))>0):
                wrongPairs.append((pages[idy],x))
    return wrongPairs

def fixPage(pages,wrongPairs):
    for pair in wrongPairs:
        indexOfRight = pages.index(pair[1])
        indexOfLeft = pages.index(pair[0])
        if(indexOfLeft > indexOfRight):
            newIndexOfLeft = indexOfRight
            pages.remove(pair[0])
            pages.insert(newIndexOfLeft,pair[0])
    return pages

def processPages(pages):
    wrongPairs = getWrongPairsInPages(pages)
    if any(wrongPairs):  
        corrected = fixPage(pages,wrongPairs)
        correctedPages.append(corrected)
            
    else:
        correctPages.append(pages)

readRules = True
with open('input5.txt', 'r') as file:
    for line in file:
        if line=='\n':
            readRules = False
        elif readRules:
            elements = line.strip().split('|')
            rules.append((elements[0],elements[1]))
        elif line!='\n':
            pages = line.strip().split(',')
            processPages(pages)
            
res1 = calculateResult(correctPages)
res2 = calculateResult(correctedPages)
print(res1)
print(res2)
