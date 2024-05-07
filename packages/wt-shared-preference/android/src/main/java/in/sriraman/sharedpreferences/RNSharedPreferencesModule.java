package in.sriraman.sharedpreferences;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.*;

import android.bluetooth.BluetoothAdapter;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.os.Bundle;
import android.widget.ListView;

import java.util.ArrayList;
import java.util.Map;

public class RNSharedPreferencesModule extends ReactContextBaseJavaModule {

	private String default_shared_name = "wit_player_shared_preferences";
	private String preference_shared_name = "shared_preferences";
	private String shared_name = this.default_shared_name;

	public void onCreate(Bundle savedInstanceState) {
	}

	public RNSharedPreferencesModule(ReactApplicationContext reactContext) {
		super(reactContext);
	}

	@Override
	public String getName() {
		return "RNWTReactPreference";
	}
	
	public Map<String, Object> getConstants() {
		setPreferenceName();
		initSharedHandler();
   		// final Map<String, Object> constants = new HashMap<>();
   		final Map<String, Object> constants = SharedDataProvider.getAllMap();
   		constants.put("DEFAULT_EVENT_NAME", "New Event");
   		return constants;
	}


	private void initSharedHandler() {
		if (shared_name == preference_shared_name) {
			SharedHandler.init(getReactApplicationContext());
		} else {
			SharedHandler.init(getReactApplicationContext(), default_shared_name);		
		}
	}

	@ReactMethod
	public void setDefaultName() {
		shared_name = default_shared_name;
	}

	@ReactMethod
	public void setPreferenceName() {
		shared_name = preference_shared_name;
	}

	@ReactMethod
	public void setName(String name) {
		shared_name = name;
	}

	@ReactMethod
		public void getSharedName(Promise promise){
			try {
				promise.resolve(shared_name);
			} catch(Exception e) {
				promise.reject("shared_name Error", e);
			}
		}

	@ReactMethod
		public void initHandler() {
			initSharedHandler();
		}


	@ReactMethod
		public void setItemString(String key, String value) {

			initSharedHandler();
			SharedDataProvider.putSharedValue(key,value);

		}

	@ReactMethod
		public void setItem(String key, String value) {

			initSharedHandler();
			SharedDataProvider.putSharedValue(key,value);

		}

	@ReactMethod
		public void setString(String key, String value) {

			initSharedHandler();
			SharedDataProvider.putSharedValue(key,value);

		}

	@ReactMethod
		public void setBoolean(String key, Boolean value) {

			initSharedHandler();
			SharedDataProvider.putSharedValue(key,value);

		}

	@ReactMethod
		public void setDouble(String key, Double value) {

			initSharedHandler();
			SharedDataProvider.putSharedValue(key,value);

		}

	@ReactMethod
		public void getItemCallback(String key, Callback successCallback){

			initSharedHandler();
			Object value = SharedDataProvider.getSharedValue(key);
			successCallback.invoke(value);

		}

// @ReactMethod(isBlockingSynchronousMethod = true)
	@ReactMethod
		public void getItem(String key, Promise promise){

			initSharedHandler();
			Object value = SharedDataProvider.getSharedValue(key);
			try {
				promise.resolve(value);
			} catch(Exception e) {
				promise.reject("Create Event Error", e);
			}
		}

	/***
	 * getItems(): returns Native Array of Preferences for the given values
	 * */
	@ReactMethod
		    public void getItems(ReadableArray keys, Callback successCallback){
			    initSharedHandler();
			    String[] keysArray= new String[keys.size()];
			    for (int i=0;i<keys.size();i++){
				    keysArray[i]=keys.getString(i);
			    }
			    String[] [] values = SharedDataProvider.getMultiSharedValues(keysArray);
			    WritableNativeArray data = new WritableNativeArray();
			    for(int i=0;i<keys.size();i++){
				    data.pushString(values[i][1]);
			    }
			    successCallback.invoke(data);
		    }

	@ReactMethod
		public void getAll(Callback successCallback){
			initSharedHandler();
			String[][] values = SharedDataProvider.getAllSharedValues();
			WritableNativeArray data = new WritableNativeArray();
			for(int i=0; i<values.length; i++){
				WritableArray arr = new WritableNativeArray();
				arr.pushString(values[i][0]);
				arr.pushString(values[i][1]);
				data.pushArray(arr);
			}
			successCallback.invoke(data);
		}

	/*
	   @ReactMethod
	   public void multiGet(String[] keys, Callback successCallback){

	   SharedHandler.init(getReactApplicationContext());
	   String[][] value = SharedDataProvider.getMultiSharedValues(keys);
	   successCallback.invoke(value);

	   }	

	 */

	@ReactMethod
		public void getAllKeys(Callback successCallback){
			initSharedHandler();
			String[] keys = SharedDataProvider.getAllKeys();
			WritableNativeArray data = new WritableNativeArray();
			for(int i=0; i<keys.length; i++){
				data.pushString(keys[i]);
			}
			successCallback.invoke(data);
		}



	@ReactMethod
		public void clear(){
			initSharedHandler();
			SharedDataProvider.clear();
		}


	@ReactMethod
		public void removeItem(String key) {
			initSharedHandler();
			SharedDataProvider.deleteSharedValue(key);
		}


}
