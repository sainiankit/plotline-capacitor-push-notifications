import Foundation

@objc public class PlotlinePush: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
