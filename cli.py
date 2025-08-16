#!/usr/bin/env python3
import subprocess
import argparse
import sys

def main():
    parser = argparse.ArgumentParser(description='CLI wrapper for Ollama')
    parser.add_argument('--model', required=True, help='Model name (e.g., deepseek-r1:1.5b)')
    parser.add_argument('--ctx', type=int, default=4096, help='Context length')
    parser.add_argument('--infile', help='Input file with prompt')
    parser.add_argument('prompt', nargs='?', help='Direct prompt text')
    
    args = parser.parse_args()
    
    if args.infile:
        with open(args.infile, 'r') as f:
            prompt = f.read()
    elif args.prompt:
        prompt = args.prompt
    else:
        prompt = sys.stdin.read()
    
    cmd = ['ollama', 'run', args.model, '--num-ctx', str(args.ctx)]
    
    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, text=True)
    proc.communicate(input=prompt)

if __name__ == '__main__':
    main()
