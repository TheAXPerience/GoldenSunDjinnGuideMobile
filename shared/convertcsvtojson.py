import csv
import json
import sys

def main():
    if len(sys.argv) != 2:
        print('Must include a file to convert.')
        return
    
    djinnlist = {
        'goldensun': [],
        'lostage': [],
        'darkdawn': []
    }
    djinnindex = {}

    try:
        with open(sys.argv[1]) as file:
            reader = csv.reader(file)
            reader.__next__() # header row

            for row in reader:
                data = {
                    'key': row[1].lower(),
                    'id': int(row[0]),
                    'name': row[1],
                    'game': row[2],
                    'type': row[3],
                    'chapter': int(row[4]),
                    'location': row[5],
                    'description': row[6],
                    'image': row[7],
                    'blurb': row[8]
                }

                if data['key'] not in djinnindex:
                    djinnindex[data['key']] = {
                        'name': data['name'],
                        'element': data['type']
                    }
                
                djinnindex[data['key']][data['game']] = {
                    'id': data['id'],
                    'image': data['image'],
                    'location': data['location'],
                    'description': data['description'],
                    'blurb': data['blurb']
                }

                djinnlist[data['game']].append({
                    'id': data['id'],
                    'name': data['name'],
                    'image': data['image'],
                    'element': data['type'],
                    'chapter': data['chapter']
                })

            with open('djinnindex.json', 'w') as jsonfile:
                json.dump(djinnindex, jsonfile)
            
            with open('djinnlist.json', 'w') as jsonfile:
                json.dump(djinnlist, jsonfile)
    except(FileNotFoundError):
        print('Could not locate the specified file.')

if __name__ == '__main__':
    main()