//
//  TheBeatGoesOn.swift
//
//  Created by Author on date
//

import Foundation

// MARK: - Global Constants

let kBeatTimeInterval = 0.75
let kNumberOfBeats = 8
let kNumberOfMeasures = 8

// MARK: - Enums

enum BeatType {
    case upbeat
    case downbeat
}

// MARK: - Protocols

protocol BeatGenerator {
    func generateBeats()
}

// MARK: - Classes

class BeatSequence {
    private var beats:[Beat] = []
    
    init(numberOfMeasures:Int) {
        for _ in 0..<numberOfMeasures {
            let beat = Beat()
            beats.append(beat)
        }
    }
    
    func play() {
        for beat in beats {
            beat.play()
        }
    }
}

class Beat: BeatGenerator {
    private var type: BeatType
    private var duration: Double
    
    init() {
        self.type = .downbeat
        self.duration = kBeatTimeInterval
    }
    
    func generateBeats() {
        for _ in 0..<kNumberOfBeats {
            switch type {
            case .downbeat:
                print("Dum")
            case .upbeat:
                print("Tum")
            }
        }
    }
    
    func play() {
        generateBeats()
        Thread.sleep(forTimeInterval: duration)
    }
    
}

// MARK: - Main

let beatSequence = BeatSequence(numberOfMeasures: kNumberOfMeasures)
beatSequence.play()