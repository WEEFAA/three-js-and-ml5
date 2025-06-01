// Not quite there yet, but better than nothing
// TODO: JSDoc, based on website documentation
// TODO: Interface/class types for each of these ML algorithm instances
// TODO: Break this apart into multiple files for readability
// TODO: Test autocomplete in a vanilla JS project
// TODO: Test autocomplete in a TypeScript project

interface MediaElement {
  [key: string]: unknown
}

interface Pose {
  score: number
  keypoints: Keypoint[]
  nose: PoseObject
  leftEye: PoseObject
  rightEye: PoseObject
  leftEar: PoseObject
  rightEar: PoseObject
  leftShoulder: PoseObject
  rightShoulder: PoseObject
  leftElbow: PoseObject
  rightElbow: PoseObject
  leftWrist: PoseObject
  rightWrist: PoseObject
  leftHip: PoseObject
  rightHip: PoseObject
  leftKnee: PoseObject
  rightKnee: PoseObject
  leftAnkle: PoseObject
  rightAnkle: PoseObject
}
interface PoseObject {
  x: number
  y: number
  confidence: number
}
interface Keypoint {
  score: number
  part: string
  position: Position
}
interface Position {
  x: number
  y: number
}

interface PoseObject {
  pose: Pose
  skeleton: Array<Array<Keypoint>>
}

interface PosenetObject {
  on(ev: 'pose', cb: (results: Array<PoseObject>) => void): void
}

type PoseNetOptions = {
  detectionType: 'single' | 'multiple'
  flipHorizontal: boolean
  imageScaleFactor: number
  maxPoseDetections: number
  minConfidence: number
  multiplier: number
  nmsRadius: number
  outputStride: number
  scoreThreshold: number
}

type ImageClassifierOptions = {
  alpha: number
  topk: number
  version: number
}

type YoloOptions = {
  classProbThreshold: number
  filterBoxesThreshold: number
  IOUThreshold: number
}

type SketchRnnModel =
  | 'alarm_clock'
  | 'ambulance'
  | 'angel'
  | 'ant'
  | 'antyoga'
  | 'backpack'
  | 'barn'
  | 'basket'
  | 'bear'
  | 'bee'
  | 'beeflower'
  | 'bicycle'
  | 'bird'
  | 'book'
  | 'brain'
  | 'bridge'
  | 'bulldozer'
  | 'bus'
  | 'butterfly'
  | 'cactus'
  | 'calendar'
  | 'castle'
  | 'cat'
  | 'catbus'
  | 'catpig'
  | 'chair'
  | 'couch'
  | 'crab'
  | 'crabchair'
  | 'crabrabbitfacepig'
  | 'cruise_ship'
  | 'diving_board'
  | 'dog'
  | 'dogbunny'
  | 'dolphin'
  | 'duck'
  | 'elephant'
  | 'elephantpig'
  | 'eye'
  | 'face'
  | 'fan'
  | 'fire_hydrant'
  | 'firetruck'
  | 'flamingo'
  | 'flower'
  | 'floweryoga'
  | 'frog'
  | 'frogsofa'
  | 'garden'
  | 'hand'
  | 'hedgeberry'
  | 'hedgehog'
  | 'helicopter'
  | 'kangaroo'
  | 'key'
  | 'lantern'
  | 'lighthouse'
  | 'lion'
  | 'lionsheep'
  | 'lobster'
  | 'map'
  | 'mermaid'
  | 'monapassport'
  | 'monkey'
  | 'mosquito'
  | 'octopus'
  | 'owl'
  | 'paintbrush'
  | 'palm_tree'
  | 'parrot'
  | 'passport'
  | 'peas'
  | 'penguin'
  | 'pig'
  | 'pigsheep'
  | 'pineapple'
  | 'pool'
  | 'postcard'
  | 'power_outlet'
  | 'rabbit'
  | 'rabbitturtle'
  | 'radio'
  | 'radioface'
  | 'rain'
  | 'rhinoceros'
  | 'rifle'
  | 'roller_coaster'
  | 'sandwich'
  | 'scorpion'
  | 'sea_turtle'
  | 'sheep'
  | 'skull'
  | 'snail'
  | 'snowflake'
  | 'speedboat'
  | 'spider'
  | 'squirrel'
  | 'steak'
  | 'stove'
  | 'strawberry'
  | 'swan'
  | 'swing_set'
  | 'the_mona_lisa'
  | 'tiger'
  | 'toothbrush'
  | 'toothpaste'
  | 'tractor'
  | 'trombone'
  | 'truck'
  | 'whale'
  | 'windmill'
  | 'yoga'
  | 'yogabicycle'
  | 'everything'

export function imageClassifier(
  model: 'MobileNet' | 'Darknet' | 'Darknet-tiny' | string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function imageClassifier(
  model: 'MobileNet' | 'Darknet' | 'Darknet-tiny' | string,
  options?: ImageClassifierOptions,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function imageClassifier(
  model: 'MobileNet' | 'Darknet' | 'Darknet-tiny' | string,
  video?: MediaElement | HTMLVideoElement,
  options?: ImageClassifierOptions,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function poseNet(
  video?: MediaElement | HTMLVideoElement,
  type?: 'single' | 'multiple',
  callback?: (error: unknown, result: unknown) => void
): undefined | PosenetObject

export function poseNet(
  video?: MediaElement | HTMLVideoElement,
  options?: PoseNetOptions,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<PosenetObject>

export function poseNet(
  callback?: (error: unknown, result: unknown) => void,
  options?: PoseNetOptions
): undefined | Promise<PosenetObject>

export function bodyPix(
  video?: MediaElement | HTMLVideoElement,
  type?: 'single' | 'multiple',
  callback?: (error: unknown, result: unknown) => void,
  options?: unknown
): undefined | Promise<unknown>

export function uNet(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function styleTransfer(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function styleTransfer(
  model: string,
  video?: MediaElement | HTMLVideoElement,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function pix2pix(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function CVAE(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function DCGAN(
  modelPath: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function SketchRNN(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function YOLO(
  video?: MediaElement | HTMLVideoElement,
  options?: YoloOptions,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function YOLO(
  options?: YoloOptions,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function soundClassifier(
  model: string,
  options?: { probabilityThreshold: number },
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function pitchDetection(
  model: 'CREPE',
  audioContext: AudioContext,
  stream: MediaStream,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function charRNN(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function sentiment(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function word2vec(
  model: string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export function SketchRNN(
  model: SketchRnnModel | string,
  callback?: (error: unknown, result: unknown) => void
): undefined | Promise<unknown>

export interface ml5Object {
  imageClassifier: imageClassifier
  poseNet: poseNet
  bodyPix: bodyPix
  uNet: uNet
  styleTransfer: styleTransfer
  pix2pix: pix2pix
  CVAE: CVAE
  SketchRNN: SketchRNN
  YOLO: YOLO
  soundClassifier: soundClassifier
  pitchDetection: pitchDetection
  charRNN: charRNN
  sentiment: sentiment
  word2vec: word2vec

  SketchRNN: SketchRNN
}
